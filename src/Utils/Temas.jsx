export const BotonesNavBarStyle = {
    color: 'black',
    '&.Mui-selected': {color: 'white'},
};

export const ContainerRootStyle = {
    '&.MuiContainer-root': {padding: 0, margin: 0, maxWidth: '100%'}
}

export const TableStyle = {
    '.table': {
        width: '95%',
        display: 'block',
        overflowX: 'auto'
    }
}

export const CabeceraTablaStyle = {
    color: "white",
    backgroundColor: "#C8C8C8",
    fontSize: '130%',
}

export const NavBarStyle = {
    bgcolor: '#C8C8C8',
    '&.MuiBottomNavigation-root': {width: '100%'},
    position: 'fixed', // Fija el componente en la parte superior
    top: 0, // Lo coloca en la parte superior
    width: '100%', // Opcional: para ocupar todo el ancho
    zIndex: 1000, // Ajusta el índice z para superponerlo correctamente

}

export const IconoNavBarSize = {
    fontSize: '200%'
}


export const ContainerModalAgregarStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    width: '90%', // Tamaño inicial en porcentaje
    maxWidth: '450px', // Ancho máximo del modal
    height: '90%', // Tamaño inicial en porcentaje
    maxHeight: '90vh', // Tamaño máximo relativo al viewport height (vh)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 1200px)': {
        maxWidth: '500px',
    },
    '@media (min-height: 720px)': {
        maxHeight: '700px',
    }
}

export const ContainerModalAgregarProductoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    width: '90%', // Tamaño inicial en porcentaje
    maxWidth: '450px', // Ancho máximo del modal
    height: '90%', // Tamaño inicial en porcentaje
    maxHeight: '90vh', // Tamaño máximo relativo al viewport height (vh)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 1200px)': {
        maxWidth: '500px',
    },
    '@media (min-height: 720px)': {
        maxHeight: '600px',
    }
}
export const ModalDetalleVenta = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '90%', // Ajusta el ancho del modal según tus necesidades
    maxHeight: '90vh', // Ajusta la altura máxima del modal según tus necesidades
    overflow: 'auto', // Agrega un scroll si el contenido excede el tamaño del modal

};

export const ContainerModalConfirmacionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 2,
    width: '30%',
    maxWidth: '90%', // Ancho máximo para dispositivos grandes
    maxHeight: '60vh', // Altura máxima para dispositivos grandes
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};


export const TablaScrollStyle = {
    table: {
        minWidth: 650,
    },
    tableContainer: {
        maxHeight: '300px',
        overflowY: 'auto',
    },
    tableHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#C8C8C8',
    },
}

export const ModalDetalleVentaStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '100%', // Ajusta el ancho del modal según tus necesidades
    maxHeight: '90%', // Ajusta la altura máxima del modal según tus necesidades
    overflow: 'hidden',
    // Para evitar el desbordamiento
}


export const ContainerModalAgregarVentaStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '24px',
    padding: 4,
    width: '80%',
    maxWidth: '1000px', // Ajusta el ancho del modal según tus necesidades
    height: '80%',
    maxHeight: '600px', // Ajusta la altura máxima del modal según tus necesidades
    overflow: 'hidden', // Para evitar el desbordamiento

};


export const TablaVentaScrollStyle = {
    table: {
        maxHeight: '30px',
        '& .MuiTableCell-root': {
            padding: '0', // Ajusta el padding vertical
            height: '5px', // Ajusta la altura de las celdas
        },
        '& .MuiTableRow-root': {
            height: '5px', // Ajusta la altura de las filas
        },
    },
    tableContainer: {
        maxHeight: '280px',
        overflowY: 'auto',
    },
    tableHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#C8C8C8',
        color: 'white',
        "& .MuiTableCell-head": {
            color: "white",
        },
    },
};

export const TablaVentasResumenScrollStyle = {
    table: {
        maxHeight: '30px',
        '& .MuiTableCell-root': {
            padding: '0', // Ajusta el padding vertical
            height: '40px', // Ajusta la altura de las celdas
        },
        '& .MuiTableRow-root': {
            height: '5px', // Ajusta la altura de las filas
        },
    },
    tableContainer: {
        maxHeight: '618px',
        overflowY: 'auto',
    },
    tableHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#C8C8C8',
        color: 'blue'
    },
}
