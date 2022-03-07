<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Correos</title>
                <link href="correos.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                <h1>Correos</h1>
                <xsl:for-each select="correos/carta">
                    <xsl:sort select="fechaExpedicion/@dia" order="ascending"/>
                    <xsl:sort select="fechaExpedicion/@mes" order="ascending"/>
                    <xsl:sort select="fechaExpedicion/@anyo" order="ascending"/>
                    <xsl:if test="@urgente = 'SI'">
                        <div class="urg">
                            <div>
                                <h2>DESTINATARIO</h2>
                                <h3>Nombre</h3>
                                <p><xsl:value-of select="destinatario/nombre"></xsl:value-of></p>
                                <h3>Direccion</h3>
                                <p><xsl:value-of select="destinatario/direccion"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/cp"></xsl:value-of>, <xsl:value-of select="destinatario/ciudad"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/provincia"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/pais"></xsl:value-of></p>
                                <h3>Fecha expedicion</h3>
                                <p><xsl:value-of select="fechaExpedicion/@dia"></xsl:value-of> - <xsl:value-of select="fechaExpedicion/@mes"></xsl:value-of> - <xsl:value-of select="fechaExpedicion/@anyo"></xsl:value-of></p>
                            </div>
                            <div>
                                <h2>REMITENTE</h2>
                                <h3>Nombre</h3>
                                <p><xsl:value-of select="remite/nombre"></xsl:value-of></p>
                                <h3>Direccion</h3>
                                <p><xsl:value-of select="remite/direccion"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/cp"></xsl:value-of>, <xsl:value-of select="remite/ciudad"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/provincia"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/pais"></xsl:value-of></p>
                                <h3>Fecha entrega</h3>
                                <p><xsl:value-of select="fechaEntrega/@dia"></xsl:value-of> - <xsl:value-of select="fechaEntrega/@mes"></xsl:value-of> - <xsl:value-of select="fechaEntrega/@anyo"></xsl:value-of></p>
                            </div>
                        </div>
                    </xsl:if>
                    <xsl:if test="@urgente = 'NO'">
                        <div class="urgNo">
                            <div>
                                <h2>DESTINATARIO</h2>
                                <h3>Nombre</h3>
                                <p><xsl:value-of select="destinatario/nombre"></xsl:value-of></p>
                                <h3>Direccion</h3>
                                <p><xsl:value-of select="destinatario/direccion"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/cp"></xsl:value-of>, <xsl:value-of select="destinatario/ciudad"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/provincia"></xsl:value-of></p>
                                <p><xsl:value-of select="destinatario/pais"></xsl:value-of></p>
                                <h3>Fecha expedicion</h3>
                                <p><xsl:value-of select="fechaExpedicion/@dia"></xsl:value-of> - <xsl:value-of select="fechaExpedicion/@mes"></xsl:value-of> - <xsl:value-of select="fechaExpedicion/@anyo"></xsl:value-of></p>
                            </div>
                            <div>
                                <h2>REMITENTE</h2>
                                <h3>Nombre</h3>
                                <p><xsl:value-of select="remite/nombre"></xsl:value-of></p>
                                <h3>Direccion</h3>
                                <p><xsl:value-of select="remite/direccion"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/cp"></xsl:value-of>, <xsl:value-of select="remite/ciudad"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/provincia"></xsl:value-of></p>
                                <p><xsl:value-of select="remite/pais"></xsl:value-of></p>
                                <h3>Fecha entrega</h3>
                                <p><xsl:value-of select="fechaEntrega/@dia"></xsl:value-of> - <xsl:value-of select="fechaEntrega/@mes"></xsl:value-of> - <xsl:value-of select="fechaEntrega/@anyo"></xsl:value-of></p>
                            </div>
                        </div>
                    </xsl:if>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
    
    
    <!-- En el caso de querer reaprovechar el mismo template para un eleemnto
         y otro, podemos usar la Pipe | indica que lo usaremos para ambos elementos.
         La llamadas se hacen por separado
         
         /////
         <xsl:apply-templates select="elementoA" />
         <xsl:apply-templates select="elementoB" />
         
         /////
         
         <xsl:template match="elementoA | elementoB">
         CODIGO DEL TEMPLATE
         </xsl:template>
         
    -->
</xsl:stylesheet>
