declare interface IUserWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'UserWebPartStrings' {
  const strings: IUserWebPartStrings;
  export = strings;
}
