import { Server } from 'lucide-react';
export function Technologies() {
  return (
    <>
      <div className='technologiesContainer mx-56 py-20 px-8'>
        <div className='technologiesContent flex flex-col items-center max-w-full'>
          <h2 className='text-7xl font-bold text-center pb-4'>Tecnologias</h2>
          <p className='text-base text-text-dim text-center'>
            Um conjunto de ferramentas completo para construir aplicações <br />
            modernas, robustas e escaláveis.
          </p>

          <div className='grid grid-cols-4 gap-8 mt-12'>
            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Frontend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                React
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>

            <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
              <h3 className='uppercase text-text-dim text-xs'>Backend</h3>
              <Server className='w-10 h-10' />
              <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
                Java
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
