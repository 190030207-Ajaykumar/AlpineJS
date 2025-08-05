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
        
        // console.log("Fetched content:", output);
        console.log("Fetched content------------------------------------------------------:");
        console.log(JSON.stringify(output, null, 2));
        aboutData = JSON.parse(JSON.stringify(output));
        return aboutData;
        
    } catch (error) {
        const errorOutput = { error: error.message };
        console.log(JSON.stringify(errorOutput, null, 2));
        return errorOutput;
    }
}

const data = await getWelcomeContent();