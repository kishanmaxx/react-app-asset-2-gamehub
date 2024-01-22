import useData from "./useData";

interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatforms =()=>useData<Platform>('/plaforms/lists/parents');
export default usePlatforms;