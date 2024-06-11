/**
 * Will use this to get url params 
 */
const useQueryParams = () => {
    const params = new URLSearchParams(
      window ? window.location.search : {}
    );

    return new Proxy(params, {
        get(target, prop) {
            return target.get(prop)
        },
    });
}
export default useQueryParams;
