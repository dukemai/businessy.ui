#Urls

- home page: /
- login and signup: /signup
- company profile: /company/{domain}
- current company: /mycompany
- search: /search?q={query}

#Api Flow
- home page
- login and sign up:
    + POST: /api/authenticate
        + Email
        + Responses:
            + 201: ok (new account)
            + 200: ok (existing account)
            + 500: server error
            + 400: missing required fields like email

- Magic link
    + POST: /api/confirm
        + Email
        + Code
        + Responses:
            + 200: ok
            + 500: server error
            + 400: missing required fields like email, code


- Search
    + POST: /api/search
        + query
        + offset
        + offsetSize
        + Responses:
            + 200: ok
            + 500: server error

- Company profile
    + GET: /api/company/{domain}
        + Responses:
            + 200: ok
            + 500: server error
            + 404: company not found
            + 400: missing required field domain

- Current company
    + GET: /api/mycompany
        + Responses:
            + 200: ok
            + 500: server error
            + 401: require login
    
    + PUT: /api/mycompany
        + company info
        + Responses:
            + 200: ok
            + 500: server error
            + 401: require login
    + POST: /api/mycompany/connect
        + Company, the company to link
        + Type, Type of connection like Supply or Consume
