<?xml version="1.0" encoding="UTF-8"?>
<stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<output method="xml" indent="yes" />
	<template match="/">
		<html>
			<body>
				<table style="border: 1px solid black">
					<tr>
						<th>
							Fecha
						</th>
						<th>
							Maxima
						</th>
						<th>
							Minima
						</th>
						<th>
							Prediccion
						</th>
					</tr>
					<for-each select="/root/prediccion/dia">
						<sort select="temperatura/maxima" order="descending" />
						<tr>
							<th>
								<value-of select="@fecha">
								</value-of>
							</th>
							<th>
								<value-of select="temperatura/maxima">
								</value-of>
							</th>
							<th>
								<value-of select="temperatura/minima">
								</value-of>
							</th>
							<th>
								<img src="{concat('imagenes/',estado_cielo/@descripcion)}.png" style="width: 100px" />
							</th>
						</tr>
					</for-each>
				</table>
			</body>
		</html>
	</template>
</stylesheet>
