// YourComponent.js
import { useState, useEffect } from 'react';

const YourComponent = () => {
  const [welcomeData, setWelcomeData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getWelcomeContent() {
    try {
      const response = await fetch("https://publish-p92368-e968987.adobeaemcloud.com/content/concentrixpartnersandboxprogram/us/en/about-page.model.json");
      const data = await response.json();
      
      const result = {};
      const targetIds = ['Welcome-text', 'Welcome-description', 'Welcome-content'];
      
      function findById(obj) {
        if (!obj || typeof obj !== 'object') return;
        
        if (obj.id && targetIds.includes(obj.id)) {
          result[obj.id] = obj.text || obj.value || obj.content || obj;
        }
        
        Object.values(obj).forEach(value => {
          if (typeof value === 'object') findById(value);
        });
      }
      
      findById(data);
      const output = {
        "Welcome-text": result["Welcome-text"] || null,
        "Welcome-description": result["Welcome-description"] || null,
        "Welcome-content": result["Welcome-content"] || null
      };
      
      console.log("Fetched content:", output);
      console.log(JSON.stringify(output, null, 2));
      
      // Pass data to component state
      setWelcomeData(output);
      setLoading(false);
      
      return output;
      
    } catch (error) {
      const errorOutput = { error: error.message };
      console.log(JSON.stringify(errorOutput, null, 2));
      setLoading(false);
      return errorOutput;
    }
  }

  useEffect(() => {
    getWelcomeContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome Content</h1>
      
      {welcomeData["Welcome-text"] && (
        <div>
          <h2>Welcome Text:</h2>
          <p>{welcomeData["Welcome-text"]}</p>
        </div>
      )}
      
      {welcomeData["Welcome-description"] && (
        <div>
          <h2>Description:</h2>
          <p>{welcomeData["Welcome-description"]}</p>
        </div>
      )}
      
      {welcomeData["Welcome-content"] && (
        <div>
          <h2>Content:</h2>
          <p>{welcomeData["Welcome-content"]}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;