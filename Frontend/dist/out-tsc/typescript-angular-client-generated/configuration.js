export class Configuration {
  apiKeys;
  username;
  password;
  accessToken;
  basePath;
  withCredentials;

  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }

  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }

  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

//# sourceMappingURL=configuration.js.map
