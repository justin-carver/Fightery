import './CreateTeam.css';
import StyledDropzone from "./StyledDropzone";

const CreateTeam = () => {
    return(
        <div className='CreateTeam w-3/6 bg-slate-100 dark:bg-stone-500 p-6 mt-10 rounded-md shadow-xl'>
            <h1 className='CreateTeam-header uppercase text-4xl mb-3 tracking-wide'>Create Your Team</h1>
            <div className='divider dark:bg-white h-0.5 w-full opacity-30' />
            <StyledDropzone />
        </div>
    );
}

export default CreateTeam;