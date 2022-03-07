<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<cadena>
            <nom>Un TV</nom>
			<programas>
                <xsl:for-each select="programacio/audiencia">
					<programa>
                        <xsl:attribute name="hora"><xsl:value-of select="hora"/></xsl:attribute>
						<nom-programa><xsl:value-of select="cadenes/cadena[@nom='Un TV']"></xsl:value-of></nom-programa>
                        <audiencia><xsl:value-of select="cadenes/cadena[@nom='Un TV']/@percentatge"></xsl:value-of></audiencia>
                    </programa>
				</xsl:for-each>
                <xsl:apply-templates select="notas"/>
            </programas>
        </cadena>
    </xsl:template>
</xsl:stylesheet>