// Employee.cfc
component {
    remote any function getEmployees() returnformat="json" {
        // Use queryExecute to get the data
        var qData = queryExecute("SELECT * FROM Employees", {}, {datasource="backendCF"});
        
        // Use a built-in util to convert query to Array of Structs
        // This is much safer than a manual loop
        var result = [];
        for (var i=1; i <= qData.recordCount; i++) {
            arrayAppend(result, {
                "id": qData.id[i],
                "firstName": qData.firstName[i],
                "lastName": qData.lastName[i],
                "role": qData.role[i]
            });
        }
        
        return serializeJSON(result);
    }
}