/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      body
      description
      readTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      body
      description
      readTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      body
      description
      readTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTestimonial = /* GraphQL */ `
  subscription OnCreateTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onCreateTestimonial(filter: $filter) {
      id
      name
      avatar
      testimony
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTestimonial = /* GraphQL */ `
  subscription OnUpdateTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onUpdateTestimonial(filter: $filter) {
      id
      name
      avatar
      testimony
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTestimonial = /* GraphQL */ `
  subscription OnDeleteTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onDeleteTestimonial(filter: $filter) {
      id
      name
      avatar
      testimony
      createdAt
      updatedAt
      __typename
    }
  }
`;
