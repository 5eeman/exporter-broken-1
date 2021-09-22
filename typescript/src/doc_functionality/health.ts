// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as CSVParse from 'papaparse'

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Health

/** Construct block from component health data */
export function constructDynamicHealthBlock(componentId: string, data: any) {
    
    // Use papaparse(r) to parse the google sheet CSV
    let parsedData = CSVParse.parse(data, {
        header: true
    })

    /* Example parsed output:

    {
        "data":[
            {
                "ID": "Button",
                "Health": "healthy",
                "Published": "1.1.1990",
                "Updated": "1.2.1990",
                "Design URL": "link"
                "Repository URL": "link"
                "Information": "Information about the component"
            }
        ],
    */

    // Find the component that has ID equal to component id
    if (!parsedData) {
        return undefined
    }

    for (let component of parsedData.data) {
        if (component.ID === componentId) {
            return {
                properties: {
                    id: component["ID"],
                    health: component["Health"],
                    published: component["Published"],
                    updated: component["Updated"],
                    designUrl: component["Design URL"],
                    repositoryUrl: component["Repository URL"],
                    info: component["Information"]
                }
            }
        }
    }
    
    return undefined
}
 

/** Construct blocks from component health data */
export function constructDynamicHealthList(data: any) {
    
    // Use papaparse(r) to parse the google sheet CSV
    let parsedData = CSVParse.parse(data, {
        header: true
    })

    /* Example parsed output:

    {
        "data":[
            {
                "ID": "Button",
                "Health": "healthy",
                "Published": "1.1.1990",
                "Updated": "1.2.1990",
                "Design URL": "link"
                "Repository URL": "link"
                "Information": "Information about the component"
            }
        ],
    */

    // Find the component that has ID equal to component id
    if (!parsedData) {
        return undefined
    }

    let blocks: Array<object> = []
    for (let component of parsedData.data) {
        blocks.push({
            properties: {
                id: component["ID"],
                health: component["Health"],
                published: component["Published"],
                updated: component["Updated"],
                designUrl: component["Design URL"],
                repositoryUrl: component["Repository URL"],
                info: component["Information"]
            }
        })
    }

    return blocks
}
 
