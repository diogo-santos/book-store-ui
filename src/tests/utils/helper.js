export const mockTranslation = {
    withTranslation: () => Component => {
        Component.defaultProps = { ...Component.defaultProps, t: (key) => key };
        return Component;
    },
};