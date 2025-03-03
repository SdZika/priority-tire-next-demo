import React from 'react'

// export async function getStaticPaths() {
//   const { data } = await client.query({ query: GET_PRODUCT_URLS });
//   const paths = data.products.items.map((product) => ({
//     params: { slug: product.url_key },
//   }));
//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//   const { data } = await client.query({
//     query: GET_PRODUCT_DETAILS,
//     variables: { urlKey: params.slug },
//   });
//   return { props: { product: data.products.items[0] } };
// }



export default function Products() {


 

  return (
    <div>index</div>
  )
}
