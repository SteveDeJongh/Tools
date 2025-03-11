import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Container } from "react-bootstrap";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
