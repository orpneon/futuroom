import axios from 'axios'
import errorHandler from '@/utils/error-handler'

const API_URL = 'https://rest.vmeste-region.ru/api/'

function buildParams (paramsObject) {
  return Object.keys(paramsObject)
    .map(key => {
      var resultValue = paramsObject[key]

      if (typeof paramsObject[key] === 'object') {
        resultValue = JSON.stringify(paramsObject[key])
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(resultValue)}`
    })
    .join('&')
}

/**
 * ПРоизводим запрос к методу API
 * @param  {String} action      Метод API
 * @param  {String} method      Метод HTTP
 * @param  {Object} data        параметры запроса
 * @param  {String} root        имя свойства объекта response
 * @param  {Boolean} silent     не показывать ошибки
 */
export function request (action, method, params = {}, root, silent) {
  const data = buildParams(params)
  const url = `${API_URL}${action}/?${data}`

  return axios({ method, url, data })
    .then(response => {
      let data = response.data
      return root ? data[root] : data
    })
    .catch((action, method, data) => {
      const defaultMsg = 'Не удалось отправить запрос'

      if (!silent) {
        errorHandler.showError(defaultMsg)
      }

      throw new Error(defaultMsg)
    })
}
