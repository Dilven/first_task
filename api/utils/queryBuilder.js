const esQueryBuilder = (req) => {
  // /products?phrase=&page=&size=&category=&sort[name]=desc
  let { 
    phrase, 
    page = 0,
    size = 5,
    category,
    sort = {}
  } = req.query;

  const query = phrase ? {
    bool : { 
      must : {
      multi_match : {
        query : phrase,
        fields : [ 'name' ],
        fuzziness : 2
      }
      },
      filter: []
    }
    } : {
    bool : {
      must : {
      match_all : {}
      },
      filter: []
    }
    };

  
  if(category) {
  query.bool.filter.push(
    { term : { "category_name" : category }}
  );
  }

  page = parseInt(page);
  const from = !page ? 0 : (page === 0 ? 0 : size * page);
  const body = {
    sort,
    query,
    size,
    from
  }

  return body;
}

const pgQueryBuilder = (req) => {
  let { 
    phrase, 
    page = 0,
    size = 5 ,
    category,
    sort
  } = req.query;

  
  let sql = '';
  const values = [];
  let countValues = 1;
  sql += 'SELECT * FROM products';

  if (phrase) {
    const value = `%${phrase}%`
    sql += ` WHERE name ILIKE $${countValues}`;
    values.push(value)
    countValues++
  }

  if(category) {
    sql += phrase ? ` AND category_name = $${countValues}` : ` WHERE category_name = $${countValues}`
    values.push(category)
    countValues++
  }
  if(sort) {
    const sortname = Object.keys(sort)
    const type = sortname[0]
    const order = sort[sortname[0]].toUpperCase()
    sql += ` ORDER BY ${type} ${order}`
  }

  if(page) {
    sql += ` OFFSET $${countValues}`;
    values.push(size * page)
    countValues++
  }

  if(size) {
    sql += ` LIMIT $${countValues}`;
    values.push(size)
    countValues++
  }
  
  return {
    sql,
    values,
    category
  }
}

module.exports = {
  esQueryBuilder,
  pgQueryBuilder
}
