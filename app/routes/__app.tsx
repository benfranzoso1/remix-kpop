import { Form, Link, NavLink, Outlet, useTransition } from "@remix-run/react";

export default function AppRoute() {
  return (
    <main className="">
      <h1>This is the Dashboard page</h1>
      <NavItem to="/dashboard">Dashboard</NavItem>
      <NavItem to="/posts">Posts</NavItem>
      <NavItem to="/account">Posts</NavItem>
      <br />
      <Form method="post" action="/logout">
        <button type="submit">Logout</button>
      </Form>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        `my-1 py-1 px-2 pr-16 text-[length:14px] ${
          isActive ? "rounded-md bg-gray-100" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
