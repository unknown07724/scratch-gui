const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = async () => await window.showSaveFilePicker({
    types: [
        {
            description: 'Scratch 3 Project',
            accept: {
                'application/x.scratch.sb3': '.sb3'
            }
        }
    ]
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb', '.sb2', '.sb3']
                }
            }
        ]
    });
    return handle;
};

const createWritable = (handle) => {
    return handle.createWritable();
};

const writeToWritable = async (writable, content) => {
    await writable.write(content);
    await writable.close();
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker,
    createWritable,
    writeToWritable
};