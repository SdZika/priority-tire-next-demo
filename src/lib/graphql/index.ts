import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      items {
        name
        url_key
        product_count
        children {
          name
          url_key
          product_count
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($search: String!, $pageSize: Int!) {
    products(search: $search, pageSize: $pageSize) {
      items {
        name
        sku
      }
    }
  }
`;