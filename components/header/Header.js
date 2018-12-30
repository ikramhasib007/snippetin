import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <a>Snippet<span>In</span></a>
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <button>Login</button>
  </header>
)

export default Header;