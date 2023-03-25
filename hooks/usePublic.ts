import { ContactProps } from "@/pages/contact";

export const getMains = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
        query GetPortfolio {
          portfolio(limit: 3, order_by: {id: desc}) {
            id
            content
            desc
            media
            title
          }
        }        
      `
    }),
  });
  const json = await response.json();
  return json?.data?.portfolio;
};

export const getFoods = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
            query GetFood {
              food {
                id
                media
                title
              }
            }       
            `
    }),
  });
  const json = await response.json();
  return json?.data?.food;
};

export const getFoodsById = async (id: number) => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          query GetFood($id: Int) {
              food(where: {id: {_eq: $id}}) {
                id
                desc
                title
                content
                ingredients
                recipes
                time
                media
                media1
                created_at
                updated_at
                type
              }
            }
                  
        `,
      variables: {
        id,
      },
    }),
  });
  const json = await response.json();
  return json?.data?.food[0];
};

export const getArticles = async () => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
            query GetPortfolio {
              portfolio {
                id
                content
                desc
                media
                slug
                title
              }
            }     
          `
    }),
  });
  const json = await response.json();
  return json?.data?.portfolio;
};


export const getَArticleById = async (id: number) => {
  const response = await fetch("https://sabberdeveloper.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query GetPortfolio($id: Int) {
        portfolio(where: {id: {_eq: $id}}) {
          id
          content
          content1
          content2
          content3
          desc
          media
          media1
          media2
          slug
          title
          title1
          title2
          title3
        }
      }
                  
        `,
      variables: {
        id,
      },
    }),
  });
  const json = await response.json();
  return json?.data?.portfolio[0];
};


export const postContact = async (data: ContactProps) => {
  const response = await fetch(`https://sabberdeveloper.hasura.app/v1/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          mutation InsertMessage($name: String, $phone: String, $text: String) {
              insert_message(objects: {name: $name, phone: $phone, text: $text}) {
                affected_rows
                returning {
                  id
                  name
                  phone
                  text
                }
              }
            }      
        `,
      variables: {
        name: data.name,
        phone: data.phone,
        text: data.text
      },
    }),
  });
  const json = await response.json();
  return json;
};
