import { storiesOf } from '@storybook/angular';
import { NextHeaderComponent } from 'next-header';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import * as marked from 'marked';
import longText from './long-text.md';
import defaultText from './default.md';
import withoutEnv from './without-env.md';
import withoutDescription from './without-description.md';
import withoutUserName from './without-user-name.md';
import withoutHelpSlot from './without-help-slot.md';
import withoutLogoutSlot from './without-logout-slot.md';
import withScrollRelativePosition from './with-scroll-relative-position.md';
import withScrollFixedPosition from './with-scroll-fixed-position.md';
import withScrollFlexPosition from './with-scroll-flex-position.md';

const styles = `
  <style>
    .next-header__user-name \{
      color: #fff;
      display: inline-block;
      font-size: 14px;
      margin: 0 1.2rem;
      text-decoration: none;
      vertical-align: middle;
    \}

    .next-header__button \{
      -webkit-appearance: none;
      align-items: center;
      background: none;
      background-color: transparent;
      background-image: none;
      border: 0;
      border-radius: 0;
      color: #fff;
      cursor: pointer;
      display: inline;
      font-size: 18px;
      height: 36px;
      justify-content: center;
      margin: 0;
      margin-top: -0.6rem;
      padding: 0;
      width: 36px;
    \}

    .next-header__button:hover,
    .next-header__button:active,
    .next-header__button:focus \{
      background-color: #fff;
      color: #0460a9;
    \}

    .container \{
      height: 97vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    \}

    .page-body \{
      overflow-y: auto;
      flex: 1;
      position: relative;
    \}

    .fixed-header \{
      position: fixed;
      left: 0%;
      top: 0%;
      right: 0%;
    \}

    .page-body-for-fixed-header \{
      margin-top: 36px;
    \}
  </style>
`;

storiesOf('next-header', module)
  .addDecorator(withKnobs)
  .add(
    'Install',
    withNotes({ text: marked(defaultText) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [env]="'Predev'"
        [projectName]="'NEXT - Admin'"
        [description]="'External Science'"
      >
        <div help-slot>
          <button
            class="next-header__button"
            id="next-header-menu"
            title="Menu"
          >▤</button>
          <button
            class="next-header__button"
            id="next-header-notifications"
            title="Notifications"
          >✉</button>
          <button
            class="next-header__button"
            id="next-header-help"
            title="Help"
          >?</button>
        </div>
        <div user-name-slot>
          <a class="next-header__user-name" href="/">Vasia Petrov</a>
        </div>
        <div logout-slot>
          <button
            class="next-header__button"
            id="next-header-logout"
            title="Logout"
          >✘</button>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Without env',
    withNotes({ text: marked(withoutEnv) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [projectName]="'NEXT - Admin'"
        [description]="'External Science'"
      >
        <div help-slot>
          <button
            class="next-header__button"
            id="next-header-menu"
            title="Menu"
          >▤</button>
          <button
            class="next-header__button"
            id="next-header-notifications"
            title="Notifications"
          >✉</button>
          <button
            class="next-header__button"
            id="next-header-help"
            title="Help"
          >?</button>
        </div>
        <div user-name-slot>
          <a class="next-header__user-name" href="/">Vasia Petrov</a>
        </div>
        <div logout-slot>
          <button
            class="next-header__button"
            id="next-header-logout"
            title="Logout"
          >✘</button>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Without description',
    withNotes({ text: marked(withoutDescription) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [env]="'Predev'"
        [projectName]="'NEXT - Admin'"
      >
        <div help-slot>
          <button
            class="next-header__button"
            id="next-header-menu"
            title="Menu"
          >▤</button>
          <button
            class="next-header__button"
            id="next-header-notifications"
            title="Notifications"
          >✉</button>
          <button
            class="next-header__button"
            id="next-header-help"
            title="Help"
          >?</button>
        </div>
        <div user-name-slot>
          <a class="next-header__user-name" href="/">Vasia Petrov</a>
        </div>
        <div logout-slot>
          <button
            class="next-header__button"
            id="next-header-logout"
            title="Logout"
          >✘</button>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Without user-name slot',
    withNotes({ text: marked(withoutUserName) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [env]="'Predev'"
        [projectName]="'NEXT - Admin'"
        [description]="'External Science'"
      >
        <div help-slot>
          <button
            class="next-header__button"
            id="next-header-menu"
            title="Menu"
          >▤</button>
          <button
            class="next-header__button"
            id="next-header-notifications"
            title="Notifications"
          >✉</button>
          <button
            class="next-header__button"
            id="next-header-help"
            title="Help"
          >?</button>
        </div>
        <div logout-slot>
          <button
            class="next-header__button"
            id="next-header-logout"
            title="Logout"
          >✘</button>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Without help-slot',
    withNotes({ text: marked(withoutHelpSlot) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [env]="'Predev'"
        [projectName]="'NEXT - Admin'"
        [description]="'External Science'"
      >
        <div user-name-slot>
          <a class="next-header__user-name" href="/">Vasia Petrov</a>
        </div>
        <div logout-slot>
          <button
            class="next-header__button"
            id="next-header-logout"
            title="Logout"
          >✘</button>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Without logout-slot',
    withNotes({ text: marked(withoutLogoutSlot) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <next-header
        [env]="'Predev'"
        [projectName]="'NEXT - Admin'"
        [description]="'External Science'"
      >
      <div help-slot>
          <button
            class="next-header__button"
            id="next-header-menu"
            title="Menu"
          >▤</button>
          <button
            class="next-header__button"
            id="next-header-notifications"
            title="Notifications"
          >✉</button>
          <button
            class="next-header__button"
            id="next-header-help"
            title="Help"
          >?</button>
        </div>
        <div user-name-slot>
          <a class="next-header__user-name" href="/">Vasia Petrov</a>
        </div>
      </next-header>
    `
    }))
  )
  .add(
    'Long page with relative position',
    withNotes({ text: marked(withScrollRelativePosition) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <div>
        <next-header
          [env]="'Predev'"
          [projectName]="'NEXT - Admin'"
          [description]="'External Science'"
        >
          <div help-slot>
            <button
              class="next-header__button"
              id="next-header-menu"
              title="Menu"
            >▤</button>
            <button
              class="next-header__button"
              id="next-header-notifications"
              title="Notifications"
            >✉</button>
            <button
              class="next-header__button"
              id="next-header-help"
              title="Help"
            >?</button>
          </div>
          <div user-name-slot>
            <a class="next-header__user-name" href="/">Vasia Petrov</a>
          </div>
          <div logout-slot>
            <button
              class="next-header__button"
              id="next-header-logout"
              title="Logout"
            >✘</button>
          </div>
        </next-header>
        ${longText}
        ${longText}
      </div>`
    }))
  )
  .add(
    'Long page with flex position',
    withNotes({ text: marked(withScrollFlexPosition) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <next-header
          [env]="'Predev'"
          [projectName]="'NEXT - Admin'"
          [description]="'External Science'"
        >
          <div help-slot>
            <button
              class="next-header__button"
              id="next-header-menu"
              title="Menu"
            >▤</button>
            <button
              class="next-header__button"
              id="next-header-notifications"
              title="Notifications"
            >✉</button>
            <button
              class="next-header__button"
              id="next-header-help"
              title="Help"
            >?</button>
          </div>
          <div user-name-slot>
            <a class="next-header__user-name" href="/">Vasia Petrov</a>
          </div>
          <div logout-slot>
            <button
              class="next-header__button"
              id="next-header-logout"
              title="Logout"
            >✘</button>
          </div>
        </next-header>
        <div class="page-body">
        ${longText}
        ${longText}
        </div>
      </div>`
    }))
  )
  .add(
    'Long page with fixed position',
    withNotes({ text: marked(withScrollFixedPosition) })(() => ({
      moduleMetadata: {
        declarations: [NextHeaderComponent]
      },
      template: `
      ${styles}
      <div>
        <next-header
          [env]="'Predev'"
          [projectName]="'NEXT - Admin'"
          [description]="'External Science'"
          class="fixed-header"
        >
          <div help-slot>
            <button
              class="next-header__button"
              id="next-header-menu"
              title="Menu"
            >▤</button>
            <button
              class="next-header__button"
              id="next-header-notifications"
              title="Notifications"
            >✉</button>
            <button
              class="next-header__button"
              id="next-header-help"
              title="Help"
            >?</button>
          </div>
          <div user-name-slot>
            <a class="next-header__user-name" href="/">Vasia Petrov</a>
          </div>
          <div logout-slot>
            <button
              class="next-header__button"
              id="next-header-logout"
              title="Logout"
            >✘</button>
          </div>
        </next-header>
        <div class="page-body-for-fixed-header">
        ${longText}
        ${longText}
        </div>
      </div>`
    }))
  );
