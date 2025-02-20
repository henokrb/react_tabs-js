import React from 'react';

export default function Tab() {
  return (
    <ul>
      <li className="is-active" data-cy="Tab">
        <a href="#tab-1" data-cy="TabLink">
          Tab 1
        </a>
      </li>
    </ul>
  );
}
