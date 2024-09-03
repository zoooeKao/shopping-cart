import {Stream} from '../stream';

export const Streams = () => {
  const streamsList = new Array(8).fill([]);

  return (
    <div className='flex gap-3'>
      {streamsList.map(() => (
        <Stream />
      ))}
    </div>
  );
};
