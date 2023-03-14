import { Suspense } from "react";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContainer />;
    </Suspense>
  );
}

export default App;
