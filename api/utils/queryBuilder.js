const esQueryBuilder = (req) => {
  let { 
    phrase, 
    page = 0,
    size = 5,
    category,
    sort: sortFromQuery = {}
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
    
  if (category) {
  query.bool.filter.push(
    { term : { "category_name" : category }}
  );
  }
  
  page = parseInt(page);
  const from = !page ? 0 : (page === 0 ? 0 : size * page);
  const sort = { "name": { "order": "asc" }}
  const body = {
    sort,
    query,
    size,
    from
  }

  return body;
}

const pgQueryBuilder = (req) => {
  // const { phrase, page, filter } = req.query;

  const size = 1; // it should be from req.query

  let sql = '';

  sql += 'SELECT * FROM products';

  // if (phrase) {
  //   sql += `name LIKE '${phrase}' `;
  // }

  // if (filter && filter.category) {
  //   sql += `categoryId=${filter.category} `;
  // }

  // if (page) {
  //   sql = `OFFSET ${size * page} `;
  // }

  // if (size) {
  //   sql = `LIMIT ${size}`;
  // }

  return sql;
}


module.exports = {
  esQueryBuilder,
  pgQueryBuilder
}
