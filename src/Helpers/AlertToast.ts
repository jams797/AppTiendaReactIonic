export const AlertToast = (message: string, present: any) => {
    const presentToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };

    presentToast('bottom');
}