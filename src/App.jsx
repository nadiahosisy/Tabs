import { useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fechJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setIsLoading(false);
  };
  useEffect(() => {}, []);
  return <h2>Tabs Starter</h2>;
};
export default App;
