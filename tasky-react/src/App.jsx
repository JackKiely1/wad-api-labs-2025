import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import TasksPage from "./pages/tasksPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <div className="container">
            <h1>Tasky</h1>
            <Routes>
              <Route path="/" element={< StartPage />} />
              <Route path="/login" element={< LoginPage />} />
              <Route path="/signup" element={< SignupPage />} />
              <Route path="/profile" element={< ProfilePage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/tasks" element={< TasksPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          </AuthContextProvider>
      </BrowserRouter>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
