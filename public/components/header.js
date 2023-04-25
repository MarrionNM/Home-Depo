import Link from "next/link";

function Header() {
  return (
    <header className="py-4 mb-10 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3>Property Delore Header</h3>
        </Link>

        <div className="flex items-center gap-6">
          <Link className="hover:text-blue-600 transition" href="logIn">Log In</Link>
          <Link className="hover:bg-skyBlue-600 transition bg-primary text-white px-4 py-3 rounded-lg" href="signUp">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
