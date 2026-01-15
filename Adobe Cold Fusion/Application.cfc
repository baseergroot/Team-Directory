component {
    this.name = "TeamDirectoryApp";

    function onRequestStart() {
        // Essential Headers for React/Axios
        cfheader(name="Access-Control-Allow-Origin", value="*");
        cfheader(name="Access-Control-Allow-Methods", value="GET, POST, OPTIONS");
        cfheader(name="Access-Control-Allow-Headers", value="Content-Type, Authorization");

        // Fixed Options check for CF 2025
        if (cgi.request_method == "OPTIONS") {
            cfheader(statuscode="200"); 
            abort;
        }
    }
}