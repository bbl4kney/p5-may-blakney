import { Disclosure } from '@heroui/react';

export default () => (
  <Disclosure>
    <Disclosure.Heading>
      <Disclosure.Trigger>
        <Disclosure.Indicator />
      </Disclosure.Trigger>
    </Disclosure.Heading>
    <Disclosure.Content/>
  </Disclosure>
)