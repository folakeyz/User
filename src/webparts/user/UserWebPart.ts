import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UserWebPartStrings';
import User from './components/User';
import { IUserProps } from './components/IUserProps';

export interface IUserWebPartProps {
  description: string;
  Name: string;
  Title: string;
  File: string;
  Email: string;
}

export default class UserWebPart extends BaseClientSideWebPart<IUserWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUserProps> = React.createElement(
      User,
      {
        description: this.properties.description,
        Name: this.properties.Name,
        Title: this.properties.Title,
        File: this.properties.File,
        Email: this.properties.Email,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
