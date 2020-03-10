export const sortColumns = columns => {
  const fixedLeftColumns = columns.filter(item => {
    if (!item.fixed) {
      return false
        }
    return item.fixed === 'left'
    })

    const fixedRightColumns = columns.filter(item => {
    if (!item.fixed) {
      return false
        }
    return item.fixed === 'right'
    })

    const nonFixedColumns = columns.filter(item => !item.fixed)
    const sortedColumns = [
    ...fixedLeftColumns,
    ...nonFixedColumns,
    ...fixedRightColumns
  ]
    return sortedColumns
};
