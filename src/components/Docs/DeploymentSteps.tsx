import { Steps } from '@/components/Steps';
import vercel_dashboard from '@/img/docs/Vercel.com-Dashboard.png'

/**
 * Our deployment steps for the deployment guide
 * @returns A styled list of directions complete with screenshots
 */
const DeploymentSteps = () => {

    // set up our doc steps
    let steps = [
        {
            title: 'Create a New Project',
            body: () => (
                <p>
                    Click "Create a New Project" inside of the Vercel dashboard.
                </p>
            ),
            image: {
                title: "Vercel.com Dashboard",
                src: vercel_dashboard.src
            }
        },
        {
            title: 'Select your Elegant application',
            body: () => (
              <p>
                Select the Elegant application that you would like to deploy to Vercel.
              </p>
            ),
            image: {
                title: "",
                src: ""
            }
        }
    ];

    return(
        <Steps intro={null} level={4} steps={steps} code={null} />
    );   
};

export default DeploymentSteps;