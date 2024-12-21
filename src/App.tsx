import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomePage from "./pages/home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/** ROUTER */}
      <HomePage />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
