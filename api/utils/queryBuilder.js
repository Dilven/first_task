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
    { term : { "categoryName" : category }}
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

module.exports = {
  esQueryBuilder,
  // postgresQueryBuilder
}
