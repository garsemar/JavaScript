<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1>Ejercicio 2</h1>
				<table style="border: 1px solid ">
					<tr style="background-color:green">
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>
                        <th>Repetidor</th>
                        <th>Nota Practica</th>
                        <th>Nota Examen</th>
                        <th>Nota Total</th>
                    </tr>
                    <xsl:for-each select="evaluacion/alumno">
						<xsl:sort select="evaluacion/alumno/apellidos" data-type="text" order="ascending"/>
						<tr>
							<th><xsl:value-of select="nombre"></xsl:value-of></th>
                            <th><xsl:value-of select="apellidos"></xsl:value-of></th>
							<th><xsl:value-of select="telefono"></xsl:value-of></th>
							<th><xsl:value-of select="@repite"></xsl:value-of></th>

                            <xsl:apply-templates select="notas"/>
                        </tr>
					</xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="notas">
        <th><xsl:value-of select="practicas"></xsl:value-of></th>
	    <th><xsl:value-of select="examen"></xsl:value-of></th>
		<th><xsl:value-of select="(examen + practicas) div 2"></xsl:value-of></th>
    </xsl:template>
</xsl:stylesheet>