export const getNewProjectIndex = (action, currentIndex, dataKeysLength) => {
    let newIndex;

    if(action === 'backward') {
      newIndex = (currentIndex - 1 + dataKeysLength) % dataKeysLength;
    } else {
      newIndex = (currentIndex + 1) % dataKeysLength;
    }

    return newIndex;

}