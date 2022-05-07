module.exports = templateData => {
    const { title, description, installation, usage, contribution, test } = templateData;

    return `
        # ${title}

        ${description}
        
        ## Installation
        
        ${installation}
        
        ## Usage
        
        ${usage}
        
        ## Contributing
        
        ${contribution}
        
        ## Test Instructions

        ${test}

        
    `
}
