if (-1 || 0) console.log( 'first' ); // выполнится (-1 = true)
if (-1 && 0) console.log( 'second' ); // не вполнится (-1 = true, 0 = false)
if (null || -1 && 1) console.log( 'third' ); // выполнится (-1 && 1 = true)