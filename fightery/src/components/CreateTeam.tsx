import './CreateTeam.css';
import StyledDropzone from "./StyledDropzone";

const CreateTeam = (props:any) => {
    return(
        <div className='CreateTeam xs:max-w-sm sm:max-w-xl max-w-5xl mb-16 w-full bg-slate-100 dark:bg-dark-mode-second p-6 mt-10 rounded-md shadow-md'>
            <h1 className='CreateTeam__header uppercase text-4xl tracking-wide'>Create Your Team</h1>
            <p className='CreateTeam__subtitle'>Gather the contestants that will take home the Fightery Cup!</p>
            <div className='divider dark:bg-white mt-2 h-0.5 w-full opacity-30' />
            <StyledDropzone enableFighteryOptions={props.enableFighteryOptions}/>
        </div>
    );
}

export default CreateTeam;