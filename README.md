# NextJs Template

# Guidelines

## General

### Pre-commit & Pre-push

When committing the following scripts will run

- `npm run tsc`
- `npm run prettier`

These scripts will make sure relevant code is typed and formatted properly.

When pushing code the following scripts will run

- `npm run lint`

This will make sure there are no linting errors, in your code.

After pushing if you see that your PR is failing CI/CD because of linting/typescript issues, then please rerun

`npm i`

and verify that husky is working in your pc.

## Frontend development

This part is mainly for developers who will be building frontend components in this repository.

### Reusable components

Please use the following reusable components to make refactors easier. You can copy paste these names in the finder to locate them.

- `LinkWrapper`: All links in the project should use this component. It will allow us to maintain consitency for functionality and styling for links.
- `CustomPortableText`: This component should be used when handling rich text. When defining the interface for **your component** use `ISanityCustomPortableText` as the type for the rich text field. If you need to get mock props for this type, you can ask the backend dev to generate some for you.

```typescript
// interface.ts for your component
interface MyComponent{
  ...,
  description: ISanityCustomPortableText
}
```

- `CustomImage | CustomFillImage`: These components accept certain props and return a NextJS image. If the image `src` fails then these components will render a fallback image. They also have a default `lqip` to render placeholder image. Ideally your components should call these image components to render images.

### Notes for using images

When defining an image for a component please consider the following:

- Should the image have a fixed height and width? If so, then please export the height and width of the component image as a `const` from the component's interface file.

  ```typescript
  // interface.ts for your component
  export const ExampleImageDimensions{
    height: 400,
    widht: 500
  }
  ```

- Should the image have one fixed dimension and another variable dimension? This is for situations where you have to maintain the aspect ratio of the image. If so then please, export only the fixed dimension from the interface file of the component. The component should also expect the variable dimension as a field.

  ```typescript
  // interface.ts for your component

  export interface MyComponent{
    width: number
  }

  export const ExampleImageDimensions{
  height: 400,
  }
  ```

- A component's image should always use the exported dimension values from the components interface file. For example lets say your component uses an image that has a fixed height.
  ```typescript
  //index.ts for your component
  ...,
  <CustomImage height={ExampleImageDimensions.height} width={width} />
  ```

## Backend Developers

This part is mainly for the developers who are working on the backend and integrating backend data with frontend components.

For startes this template uses the query language `groq`. You can practice groq with the `vision` tool in sanity dashboard. If you are not sure where to find it you can ask a fellow sanity dev.

This template contains some helper functions and query fragments to make development easier. It is important you go through the `src/backend` folder.

- `Images`: Sanity images are very powerful.

  - They allow the editor to have hotspots, crops for their images.
  - They allow to the developer to render such images easily. They also provide the developer with `lqip` versions of the image.

  There is a `generate-image` folder in `backend`.
  It contains 3 functios that help generate image objects according the frontend needs. Please go through the function description and use them appropriately.

- `Queries & Fragments`: Queries in groq can becom a little awkward. They are more versatile than graphql because you can query for everything or only the fields you need. But filtering and pagination can make a query quite unwieldly. This is something that you just have to practice and get better in. You can always ask a fellow sanity dev for help when you get stuck.

  Fragments are core part of writing sanity queries. There are a lot of reusable schemas in sanity. You can create fragments for those schemas to make writing queries a lot easier.There are some examples of the usage of fragments in the `/backend/queries/` folder

- `Types and Interfaces`: Unfortunately sanity does not yet have a stable codegen process. You will have to write the interfaces for sanity data manually. This will help you maintain typesafety as the project gets bigger. **This is a very important step please do not ignore it.** If you provide the interface for the shape of the data you are expecting, you will get code completion and type safety when handling the data before passing it to the frontend component.
