import './CreateTeam.css';
import StyledDropzone from "./StyledDropzone";

const CreateTeam = (props:any) => {
    return(
        <div className='CreateTeam sm:max-w-xl md:max-w-6xl w-full bg-slate-100 dark:bg-dark-mode-second p-6 mt-10 rounded-md shadow-xl'>
            <h1 className='CreateTeam__header uppercase text-4xl tracking-wide'>Create Your Team</h1>
            <p className='CreateTeam__subtitle'>Gather the contestants that will take home the Fightery Cup!</p>
            <div className='divider dark:bg-white h-0.5 w-full opacity-30' />
            <StyledDropzone enableFighteryOptions={props.enableFighteryOptions}/>
        </div>
    );
}

export default CreateTeam;