import Tag from "./Tag";

interface Project {
    name: string;
    description: string;
    role: string;
    tags: Tag[];
};

export default Project;