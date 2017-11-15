import introductionTemplate from './introduction.md'
import contributingTemplate from './contributing.md'
import urlsTemplate from './urls.md'
import componentStatusTemplate from './component-status.md'
import screenTemplate from './screen.md'
import containerTemplate from './container.md'
import headerTemplate from './header.md'
import titleTemplate from './title.md'
import listTemplate from './list.md'
import gridTemplate from './grid.md'
import cellTemplate from './cell.md'
import buttonTemplate from './button.md'
import textTemplate from './text.md'
import dataZeroTemplate from './dataZero.md'

export default function ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('showcase.documentation', {
      url: '/documentation',
      friendlyName: 'Documentation',
      groupName: 'Getting started',
      redirectTo: 'showcase.documentation.introduction',
      template: '<ui-view></ui-view>',
      weight: 9000
    })
    .state('showcase.documentation.introduction', {
      url: '/introduction',
      friendlyName: 'Introduction',
      template: introductionTemplate
    })
    .state('showcase.documentation.contributing', {
      url: '/contributing',
      friendlyName: 'Contributing',
      template: contributingTemplate
    })
    .state('showcase.documentation.urls', {
      url: '/urls',
      friendlyName: 'URLs',
      template: urlsTemplate
    })
    .state('showcase.documentation.component-status', {
      url: '/component-status',
      friendlyName: 'Component status',
      template: componentStatusTemplate
    })
    .state('showcase.documentation.screen', {
      url: '/screen',
      friendlyName: 'Screen',
      template: screenTemplate
    })
    .state('showcase.documentation.container', {
      url: '/container',
      friendlyName: 'Container',
      template: containerTemplate
    })
    .state('showcase.documentation.header', {
      url: '/header',
      friendlyName: 'Header',
      template: headerTemplate
    })
    .state('showcase.documentation.title', {
      url: '/title',
      friendlyName: 'Title',
      template: titleTemplate
    })
    .state('showcase.documentation.list', {
      url: '/list',
      friendlyName: 'List',
      template: listTemplate
    })
    .state('showcase.documentation.grid', {
      url: '/grid',
      friendlyName: 'Grid',
      template: gridTemplate
    })
    .state('showcase.documentation.cell', {
      url: '/cell',
      friendlyName: 'Cell',
      template: cellTemplate
    })
    .state('showcase.documentation.text', {
      url: '/text',
      friendlyName: 'Text',
      template: textTemplate
    })
    .state('showcase.documentation.button', {
      url: '/button',
      friendlyName: 'Button',
      template: buttonTemplate
    })
    .state('showcase.documentation.dataZero', {
      url: '/dataZero',
      friendlyName: 'Data Zero',
      template: dataZeroTemplate
    })
}
