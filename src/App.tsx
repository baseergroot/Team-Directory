import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, User, Briefcase, Loader2 } from 'lucide-react';


interface EmployeeInterface {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}
  
const App = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your ColdFusion API URL
  const API_URL = 'http://localhost:8500/team-api/Employee.cfc?method=getEmployees';

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        
        // ColdFusion sometimes returns data as a string if not set correctly
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        
        // console.log({data});
        
        setEmployees(data);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not connect to the ColdFusion Backend. Check if the server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter logic for the search bar
  const filteredEmployees = employees.filter(emp =>
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 py-8 px-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-600">MED49 <span className="text-slate-800">Team</span></h1>
            <p className="text-slate-500 mt-1">Bridging React & ColdFusion</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or role..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-inner bg-slate-50"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">Fetching records from ColdFusion...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Directory Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEmployees.map((emp) => (
              <div 
                key={emp.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <User className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">ID: 00{emp.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {emp.firstName} {emp.lastName}
                </h3>
                
                <div className="flex items-center text-slate-500 gap-2 mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">{emp.role}</span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Empty Search State */}
        {!loading && filteredEmployees.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No team members match your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;