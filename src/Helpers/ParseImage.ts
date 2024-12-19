export const ParseImage = (img: string) => {
    return img
        .replaceAll('"', '')
        .replaceAll('[', '')
        .replaceAll(']', '');
}